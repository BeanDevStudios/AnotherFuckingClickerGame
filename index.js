class Point{
    constructor()
    {
        this.number = {Balance:0};
        this.log = []
    }

    play()
    {
        this.number.Balance++;
        this.log.push("Balance:"+ this.number.Balance);
    }
}