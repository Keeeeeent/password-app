class main{
    private passwordlist:string
    private count:number
    // パスワードで使うための文字をコンストラクターで定義する
    constructor(counts:number){
        this.passwordlist = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"
        this.count = counts
    }
    // パスワードを生成する
    private password():string{
        let list:string = ""
        for (let i = 0; i < this.count; i++) {
            list += this.passwordlist[Math.floor(Math.random() * this.passwordlist.length)]
        }
        return list
    }
    // 生成したパスワードをHTMLに挿入するメソッド
    public init():void{
        const text = document.getElementById("app") || "ここに生成されたパスワードを表示する"
        if(text != "ここに生成されたパスワードを表示する"){
            text.innerText = this.password()
        }
    }
}

document.getElementById("btn")?.addEventListener("click",() => {
    // @ts-ignore
    let MAIN_NUMBER:number = Number(document.getElementById("inp")?.value)
    new main(MAIN_NUMBER).init()
})