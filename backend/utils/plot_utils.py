import pyecharts.options as opts
from pyecharts.charts import Line
import os

def save_plot_pyecharts(dates, values, virus_name, chart_type, max_infected, max_infected_day):
    line = (
        Line(init_opts=opts.InitOpts(width="480px", height="380px", bg_color='white'))
        .add_xaxis(dates)
        .add_yaxis("Susceptible", values[:, 0].tolist(), is_smooth=True)
        .add_yaxis("Exposed", values[:, 1].tolist(), is_smooth=True)
        .add_yaxis("Infected", values[:, 2].tolist(), is_smooth=True)
        .add_yaxis("Recovered", values[:, 3].tolist(), is_smooth=True)
        .add_yaxis("Vaccinated", values[:, 4].tolist(), is_smooth=True)
        .add_yaxis("Deceased", values[:, 5].tolist(), is_smooth=True)
        .set_series_opts(
            areastyle_opts=opts.AreaStyleOpts(opacity=0.5),
            label_opts=opts.LabelOpts(is_show=False),
        )
        .set_global_opts(
            title_opts=opts.TitleOpts(title=f"{virus_name} Variant - {chart_type}", pos_top='10%'),
            xaxis_opts=opts.AxisOpts(
                axistick_opts=opts.AxisTickOpts(is_align_with_label=True),
                is_scale=False,
                boundary_gap=False,
            ),
            tooltip_opts=opts.TooltipOpts(trigger="axis"),
            datazoom_opts=[opts.DataZoomOpts(), opts.DataZoomOpts(type_="inside")],
        )
    )
    
    line_html_path = os.path.join("static", f"{virus_name}_{chart_type}.html")
    line.render(line_html_path)
    
    return line_html_path

def save_daily_new_infections_plot_pyecharts(dates, values, virus_name):
    daily_new_infections = [values[i, 2] - values[i - 1, 2] for i in range(1, len(values))]
    daily_new_infections.insert(0, values[0, 2])

    line = (
        Line(init_opts=opts.InitOpts(width="480px", height="380px", bg_color='white'))
        .add_xaxis(dates)
        .add_yaxis("Daily New Infections", daily_new_infections, is_smooth=True)
        .set_series_opts(
            areastyle_opts=opts.AreaStyleOpts(opacity=0.5),
            label_opts=opts.LabelOpts(is_show=False),
        )
        .set_global_opts(
            title_opts=opts.TitleOpts(title=f"{virus_name} Variant - Daily New Infections", pos_top='10%'),
            xaxis_opts=opts.AxisOpts(
                axistick_opts=opts.AxisTickOpts(is_align_with_label=True),
                is_scale=False,
                boundary_gap=False,
            ),
            tooltip_opts=opts.TooltipOpts(trigger="axis"),
            datazoom_opts=[opts.DataZoomOpts(), opts.DataZoomOpts(type_="inside")],
        )
    )

    daily_new_infections_html_path = os.path.join("static", f"{virus_name}_daily_new_infections.html")
    line.render(daily_new_infections_html_path)

    return daily_new_infections_html_path
