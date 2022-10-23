# HackGT 2022 Project

By: Tomer Shmul, Erich Logan Drawdy, Mateo Mendoza, Rithvik Ram 
Stack: React Native, Flask, Python


## Inspiration
Our inspiration for this project arose from our shared passion for computer science and finance. We saw how our peers often have the tools to get into investing in stocks, but were often **faced with the obstacle of how to invest their funds**. We wanted to create a platform that alleviates this burden, making education and participation in the stock market more equitable and widespread. 

## What it does
Our platform only requires users to know how much they want to invest -- we handle the rest. The application guides the user through the companies they may want to invest in, and highlights the diversity of the portfolio they have selected. We **display a "Diversity Bar"**, which increases when the user selects stocks in a wider range of industries. We wanted to create a tool for beginners to find an optimal portfolio with minimal market volatility and risk. After choosing companies from the selection of industries, we display how much users should invest in each company based on their initial investment amount to **minimize risk while yielding an annual return** on their portfolio. We know that beginners tend to favor low risk investments as an entry into the stock market, so we provide them with the options to create a tailored portfolio of their choosing. 

## How we built it
We wanted to create a seamless mobile experience that would be accessible on a variety of platforms. We opted for **React Native**, giving us the option to build the application for iOS, Android, and the web. In using this framework for the front end, we've created a responsive, guided experience for users to follow the process from start to end. For the back end, we are using **Flask to hold the Python algorithm** that calculates the weights assigned to each stock, the Sharpe ratio, expected annual return, and the covariance matrix when inputted a range of dates and the closing price for each ticker for each day in that range. We used an **API to produce the historical stock prices** for each ticker selected for the portfolio, which we fed as a JSON into the Python virtual environment and Flask backend through a POST request from the React Native front end. The platform coherently integrates these technologies, providing for a full stack application that serves the purpose we intended. 

## Challenges we ran into
Initially, we were faced with the challenge of utilizing new frameworks and technologies. None of our team members had exposure to the stack we used in our previous coursework and projects. **Through each and every bug and compilation error that we faced, we gained a deeper understanding of the tools we were using**. Another issue we faced is converting the vast amounts of data that the historical stock price API produced into a simpler 2D matrix that we could feed into the Python algorithm API that we implemented ourselves. The biggest hurdle we faced was connecting our front-end interface to the back-end script that handled the calculations integral for the function of the platform. Running the API we created in the **Flask environment through a fetch POST request in our React Native front-end garnered seemingly endless errors**, with each issue that we tackled leading to another. Through persistent attempts at understanding the framework we were using as well as consulting others more knowledgable with the technology, we were ultimately able to create a robust platform to handle this integration.

## Accomplishments that we're proud of & what we learned
We're proud of this project as a showcase of our ability to adapt to the task at hand and learn new technologies that fit the purpose that we hoped to achieve. **In the span of just 36 hours**, we dug past the surface of understanding for the frameworks we used and _created a product that truly satisfies our original vision and passion_ for this ongoing project. We believe our platform has the potential to provide beginners in the community with not only the tools, but the inspiration and guidance they need to begin investing. Most importantly, through this hackathon, **we grew not only as developers, but as a team.**

## What's next
Although we have created a fully functioning platform that suits the initial idea our team had in mind, we know the potential that tools like Stockify hold for those beginning their financial journey. We know that our platform can always be improved and expanded on, and **our plans for Stockify do not end when the 36 hours do**. Adding additional insights into the users' portfolio, a wider selection of industries and tickers, as well as continued education on stock investment strategies may all **help bridge the gap that many face when looking to start investing.**
