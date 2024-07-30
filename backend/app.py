from flask import Flask, request, jsonify
from flask_cors import CORS
import os
from models.seirsvd_model import run_model  # 确保这些导入的模块存在
from utils.plot_utils import save_plot_pyecharts, save_daily_new_infections_plot_pyecharts  # 确保这些导入的模块存在
from datetime import datetime, timedelta

app = Flask(__name__)
CORS(app, resources={r"/api/*": {"origins": "*"}})  # 允许所有来源的跨域请求

@app.route('/api/predict-and-generate-chart', methods=['POST'])
def predict_and_generate_chart():
    try:
        data = request.json
        virus_name = data.get('virus_name')
        total_population = int(data.get('total_population'))  # 转换为整数
        current_infected = int(data.get('current_infected'))  # 转换为整数
        vaccinated = int(data.get('vaccinated'))  # 转换为整数

        print(f"Received data: {data}")

        try:
            sol, t, six_month_infected, max_infected, max_infected_day = run_model(total_population, current_infected, vaccinated, virus_name)
        except ValueError as e:
            print(f"Error in model computation: {e}")
            return jsonify({"error": str(e)}), 400

        chart_paths = {
            'six_months': save_plot_pyecharts(t[:182], sol[:182], virus_name, 'six_months', max_infected, max_infected_day),
            'daily_new_infections': save_daily_new_infections_plot_pyecharts(t[:182], sol[:182], virus_name)
        }

        prediction_result = {
            'virus_name': virus_name,
            'total_population': total_population,
            'current_infected': current_infected,
            'vaccinated': vaccinated,
            'six_month_infected': int(six_month_infected),
            'peak_infected': int(max_infected),
            'peak_infected_day': (datetime.now() + timedelta(days=int(max_infected_day))).strftime('%Y-%m-%d')
        }

        return jsonify({
            'prediction_result': prediction_result,
            'chart_urls': chart_paths,
            'six_month_infected': six_month_infected
        })

    except Exception as e:
        print(f"Unexpected error: {e}")
        return jsonify({"error": "Internal server error"}), 500

if __name__ == '__main__':
    if not os.path.exists('static'):
        os.makedirs('static')
    app.run(debug=True)
