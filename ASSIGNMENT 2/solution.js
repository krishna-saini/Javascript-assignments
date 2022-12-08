function accountBalance(){
    //   console.log('hey')
    }
    const personAccount = {
        firstName: 'Krishna',
        lastName:' Saini',
        incomes: {
            salary: 5000,
            uber: 8000,
            youtube: 2000
        },
        expenses: {
            commute: 500,
            grocery: 2000,
            party: 1000
        },
        properties: ['Malabar Hills', 'Mars'],
        totalIncome: function(){
            return this.incomes.reduce((accumulator, curValue) => accumulator + curValue)
        },
        // ES6 enhancement 
        totalExpense(){},
        accountInfo:'dafda',
        addIncome:'asdfsad',
        accountBalance
    }
    console.log(personAccount.firstName)