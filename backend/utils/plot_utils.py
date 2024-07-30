import os
import numpy as np
from datetime import datetime, timedelta
from pyecharts.charts import Line
from pyecharts import options as opts

def save_plot_pyecharts(t, sol, variant, plot_type, max_infected, max_infected_day):
    line = Line()
    line.add_xaxis([str(datetime.now().date() + timedelta(days=int(day))) for day in t])
    line.add_yaxis("Susceptible", sol[:, 0].tolist(), is_smooth=True)
    line.add_yaxis("Exposed", sol[:, 1].tolist(), is_smooth=True)
    line.add_yaxis("Infected", sol[:, 2].tolist(), is_smooth=True)
    line.add_yaxis("Recovered", sol[:, 3].tolist(), is_smooth=True)
    line.add_yaxis("Vaccinated", sol[:, 4].tolist(), is_smooth=True)
    line.add_yaxis("Deceased", sol[:, 5].tolist(), is_smooth=True)
    line.set_global_opts(
        title_opts=opts.TitleOpts(title=f"SEIRS-V-D Model - {variant.capitalize()} Variant ({plot_type.replace('_', ' ').capitalize()})"),
        xaxis_opts=opts.AxisOpts(name="Date"),
        yaxis_opts=opts.AxisOpts(name="Number of individuals"),
        datazoom_opts=[opts.DataZoomOpts()]
    )
    filename = f'{variant.lower()}_{plot_type}.html'
    filepath = os.path.join('static', filename)
    line.render(filepath)
    return filepath

def save_daily_new_infections_plot_pyecharts(t, sol, variant):
    new_infections = np.diff(sol[:, 2], prepend=sol[0, 2])
    line = Line()
    line.add_xaxis([str(datetime.now().date() + timedelta(days=int(day))) for day in t])
    line.add_yaxis("Daily New Infections", new_infections.tolist(), is_smooth=True)
    line.set_global_opts(
        title_opts=opts.TitleOpts(title=f"Daily New Infections - {variant.capitalize()} Variant"),
        xaxis_opts=opts.AxisOpts(name="Date"),
        yaxis_opts=opts.AxisOpts(name="Number of individuals"),
        datazoom_opts=[opts.DataZoomOpts()]
    )
    filename = f'{variant.lower()}_daily_new_infections.html'
    filepath = os.path.join('static', filename)
    line.render(filepath)
    return filepath
