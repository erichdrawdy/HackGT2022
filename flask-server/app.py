from flask import Flask, jsonify
import pandas
import numpy
import requests
from pypfopt.efficient_frontier import EfficientFrontier
from pypfopt import risk_models
from pypfopt import expected_returns
app = Flask(__name__)
@app.route("/")
def home():
    df = pandas.read_csv(r'/Users/logandrawdy/Downloads/testdata.csv')
    df= df.set_index(pandas.DatetimeIndex(df['Date'].values))
    df.drop(columns=['Date'], axis=1, inplace=True)
    assets = df.columns
    mu = expected_returns.mean_historical_return(df)
    S = risk_models.sample_cov(df)
    ef = EfficientFrontier(mu, S)
    weights = ef.min_volatility()
    performance = ()
    performance = ef.portfolio_performance(verbose=True)
    retbody = {
        "Expected Annual Return" : performance[0],
        "Weights" : weights
    }
    return jsonify(retbody)