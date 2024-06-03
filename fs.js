const fs = require("fs")
const FILE_NAME = "info.txt"

const ReadFile = ()=>{
    fs.readFile(FILE_NAME, "utf-8", (err, data)=>{
        if(err){
            console.error(err)
        }else{
            console.log(`Your ${FILE_NAME}: ${data}`)
        }
    })
}

const WriteFile = ()=>{
    process.stdout.write("What we must add to your file: ")
    process.stdin.on('data', (data)=>{
        let txt = data.toString() 
        fs.appendFile(FILE_NAME, txt, "utf-8", (err)=>{
            if(err){
                console.log(err)
            }
        })
        process.exit
        ReadFile()
    })
}




WriteFile("dd")


