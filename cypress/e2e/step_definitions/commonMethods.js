class CommonMethods{

    uniqueString(string) {
        var result           = string;
        var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        var charactersLength = characters.length;
        for ( var i = 0; i < 4; i++ ) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        console.log(result);
        return result;
    }



     

}

export default CommonMethods;
