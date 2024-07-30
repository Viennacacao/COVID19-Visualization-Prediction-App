import numpy as np
from scipy.integrate import odeint
from datetime import datetime, timedelta

def seirsvd_model(y, t, beta_func, sigma, gamma, xi, nu, epsilon, mu, policy_effect, seasonality_effect):
    S, E, I, R, V, D = y
    N = S + E + I + R + V  # 总人口
    beta = beta_func(t, policy_effect, seasonality_effect)  # 动态传染率
    dS_dt = -beta * S * I / N + xi * R - nu * S  # 易感者的变化率
    dE_dt = beta * S * I / N + epsilon * beta * V * I / N - sigma * E  # 暴露者的变化率
    dI_dt = sigma * E - gamma * I - mu * I  # 感染者的变化率，包括死亡
    dR_dt = gamma * I - xi * R  # 恢复者的变化率
    dV_dt = nu * S - epsilon * beta * V * I / N  # 接种者的变化率，考虑可能被感染
    dD_dt = mu * I  # 死亡者的变化率
    return dS_dt, dE_dt, dI_dt, dR_dt, dV_dt, dD_dt

def beta_func(t, policy_effect, seasonality_effect):
    base_beta = 0.15  # 设置一个默认的基础传染率
    beta = base_beta * policy_effect(t) * seasonality_effect(t)
    return beta

def policy_effect(t):
    return 0.75 + 0.25 * np.sin(2 * np.pi * t / 200)

def seasonality_effect(t):
    return 1 + 0.2 * np.sin(2 * np.pi * t / 365)

def run_model(total_population, current_infected, recovered, vaccinated, variant):
    if variant.lower() == 'alpha':
        sigma = 1 / 5.1
        gamma = 1 / 14
        epsilon = 0.1
    elif variant.lower() == 'delta':
        sigma = 1 / 4.4
        gamma = 1 / 10
        epsilon = 0.2
    elif variant.lower() == 'omicron':
        sigma = 1 / 3.42
        gamma = 1 / 7
        epsilon = 0.3
    else:
        raise ValueError("Unknown variant")
    
    xi = 1 / 180
    nu = 0.002
    mu = 0.01

    E0 = current_infected * 3
    I0 = current_infected
    R0 = recovered
    D0 = 0
    S0 = total_population - E0 - I0 - R0 - vaccinated - D0
    y0 = S0, E0, I0, R0, vaccinated, D0

    t = np.linspace(0, 365, 365)
    sol = odeint(seirsvd_model, y0, t, args=(beta_func, sigma, gamma, xi, nu, epsilon, mu, policy_effect, seasonality_effect))

    six_month_infected = sol[182, 2]
    max_infected = np.max(sol[:, 2])
    max_infected_day = np.argmax(sol[:, 2])

    return sol, t, six_month_infected, max_infected, max_infected_day
