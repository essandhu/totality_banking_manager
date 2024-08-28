## Totality Banking Manager

Financial Application for Managing Banking Information <br/><br/>
Try it out [here!](https://totality-banking-manager.vercel.app/)

## Features

Currently, Totality Banking provides the following functionality:
- [x] **Account Creation / Authentication:** Users can create an account to use the application, which is properly validated and stored to ensure data security <br/><br/>
![Screenshot of sign-up page](/public/screenshots/sign-up.png)
![Screenshot of sign-in page](/public/screenshots/sign-in.png)
- [x] **Plaid Integration:** Connecting to any amount of bank accounts securely through Plaid <br/>
- [x] **Dashboard:** View important information such as total account balances, recent transactions, available banking cards, and more! <br/><br/>
![Screenshot of home screen after signing-in](/public/screenshots/home-screen.png)
- [x] **Transaction History:** Full transaction history including name, date, amount, type, and status of each transaction, for each account linked <br/><br/>
![Screenshot of transactions history page](/public/screenshots/transactions.png)
- [x] **Bank List:** View all currently connected banks and information regarding those accounts <br/><br/>
![Screenshot of banks list](/public/screenshots/banks.png)
- [x] **Transfer Funds:** Allows for transfering funds from one account to another using Dwolla's payment processor <br/><br/>
![Screenshot of transfer funds page](/public/screenshots/transfer-funds.png)
- [x] **Spending Habits:** Displays the most common types of transactions on the dashboard based on user activity

## Tech Stack

- Typescript
- Next.js
- Zod - schema validation
- TailwindCSS - styling UI components
- ShadCN-UI - providing bases for some frontend components
- Chart.js - data visualization
- Appwrite - database management
- Plaid = connecting to bank accounts
- Dwolla - payment processing

## Acknowledgements

Special thanks to the developers of all tools and frameworks used during the development of this project. <br/>
Credit to [adrianhajdin](https://github.com/adrianhajdin) on GitHub for providing assets used in this project.
