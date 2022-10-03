//BOT TELEGRAM
//npm init -> inizializzo il progetto
//npm install telegraf -> installo il modulo per telegraf
//fare il bot
//cancellare i node_modules prima di consegnare!

/*npm init -y
npm install telegraf
npm install axios
npm i -g nodemon

# Creazione di un file index.js

nodemon index.js*/
class Studente {
    constructor(nome,cognome,altezza,coloreCapelli,occhi,hobby,annoDiNascita) {
      this.nome = nome
      this.cognome = cognome
      this.altezza = altezza
      this.coloreCapelli = coloreCapelli
      this.occhi = occhi
      this.hobby = hobby
      this.annoDiNascita = annoDiNascita
    }
  }

//178 180 164 176 176 170
const s1 = new Studente("Maxime","Fornaro",178,"marroni","marroni","musica",2004)
const s2 = new Studente("stefano","delledonne",174,"biondi","azzurri","anime",2003)
const s3 = new Studente("federico","pavan",180,"marroni","verdi","basket",2003)
const s4 = new Studente("carlo","solimeno",185,"marroni","marroni","rugby",2003)
const s5 = new Studente("thomas","lacanfora",180,"marroni","marroni","basket",2004)
const s6 = new Studente("martina","zani",164,"biondi","verdi","pallavolo",2004)
const s7 = new Studente("michele","messori",176,"biondi","azzurri","pianoforte",2005)
const s8 = new Studente("daniele","donofrio",176,"neri","verdi","dragonball",2004)
const s9 = new Studente("francesco","marchetti",175,"neri","marroni","cinema",2003)
const s10 = new Studente("francesca","ciervo",170,"marroni","marroni","cultura orientale",2005)

//importare così il modulo
const telegraf = require("telegraf")
const dotenv = require("dotenv")
const { default: axios } = require("axios")

let studenti = [s1,s2,s3,s4,s5,s6,s7,s8,s9,s10]

dotenv.config({
    path: "./secret.env"
})

//istanzio il bot(classe Telegraf nel modulo telegraf, accetta un argomento)
const bot = new telegraf.Telegraf(process.env.BOT_TOKEN) //5650947325:AAEumvI2qGShqYzec2zm93g-GgWBanCeqaA

bot.start(async(ctx) => {
    await ctx.reply("ciao! sono Xenia l'indovina, pensa ad un alunno della classe 5^E, per iniziare il gioco digita /akinator")
})


bot.command("akinator", async(ctx) => {
    await ctx.reply("L'alunno/a è nato nell'anno 2003 s/n")
    bot.command("s", async(ctx) => {
        let studenti2 = studenti.filter(studente => studente.annoDiNascita == 2003)
        await ctx.reply("L'alunno/a è alto più di un metro e settantacinque? S/N")
            bot.command("S",async(ctx) => {
                let studenti3 = studenti2.filter(studente => studente.altezza>175)
                await ctx.reply("L'alunno/a ha i occhi verdi? si/no")
                bot.command("si",async(ctx) => {
                    await ctx.reply("stai pensando a " + studenti3[0].nome + " " + studenti3[0].cognome + " che come hobby pratica " + studenti3[0].hobby +"?")
                    await ctx.reply("se vorrai rigiocare usa il comando /akinator")
                })
                bot.command("no",async(ctx) => {
                    await ctx.reply("stai pensando a " + studenti3[1].nome + " " + studenti3[1].cognome + " che come hobby pratica " + studenti3[1].hobby+"?")
                    await ctx.reply("se vorrai rigiocare usa il comando /akinator")
                }) 
            })
            bot.command("N",async(ctx) => {
                let studenti4 = studenti2.filter(studente => studente.altezza<=175)
                await ctx.reply("L'alunno/a ha i capelli biondi? si/no")
                bot.command("si",async(ctx) => {
                    await ctx.reply("stai pensando a " + studenti4[0].nome + " " + studenti4[0].cognome + " che come hobby pratica " + studenti4[0].hobby +"?")
                    await ctx.reply("se vorrai rigiocare usa il comando /akinator")
                })
                bot.command("no",async(ctx) => {
                    await ctx.reply("stai pensando a " + studenti4[1].nome + " " + studenti4[1].cognome + " che come hobby pratica " + studenti4[1].hobby+"?")
                    await ctx.reply("se vorrai rigiocare usa il comando /akinator")
                }) 
            })
    })
    bot.command("n",async(ctx) => {
        let studenti5 = studenti.filter(studente => studente.annoDiNascita != 2003)
        await ctx.reply("L'alunno/a è alto più di un metro e settantacinque? S/N")
            bot.command("S",async(ctx) => {
                let studenti6 = studenti5.filter(studente => studente.altezza>175)
                await ctx.reply("L'alunno/a ha i capelli marroni? si/no")
                bot.command("si",async(ctx) => {
                    let studenti7 = studenti6.filter(studente => studente.coloreCapelli == "marroni")
                    await ctx.reply("L'alunno/a studia musica in consercatorio? Si/No")
                    bot.command("Si",async(ctx) => {
                        await ctx.reply("stai pensando a " + studenti7[0].nome + " " + studenti7[0].cognome + " che come hobby pratica " + studenti7[0].hobby+"?")
                        await ctx.reply("se vorrai rigiocare usa il comando /akinator")
                    })
                    bot.command("No",async(ctx) => {
                        await ctx.reply("stai pensando a " + studenti7[1].nome + " " + studenti7[1].cognome + " che come hobby pratica " + studenti7[1].hobby+"?")
                        await ctx.reply("se vorrai rigiocare usa il comando /akinator")
                    })
                })
                bot.command("no",async(ctx) => {
                    let studenti8 = studenti6.filter(studente => studente.coloreCapelli == "marroni")
                    await ctx.reply("L'alunno/a studia musica in consercatorio? Si/No")
                    bot.command("Si",async(ctx) => {
                        await ctx.reply("stai pensando a " + studenti8[0].nome + " " + studenti8[0].cognome + " che come hobby pratica " + studenti8[0].hobby+"?")
                        await ctx.reply("se vorrai rigiocare usa il comando /akinator")
                    })
                    bot.command("No",async(ctx) => {
                        await ctx.reply("stai pensando a " + studenti8[1].nome + " " + studenti8[1].cognome + " che come hobby pratica " + studenti8[1].hobby+"?")
                        await ctx.reply("se vorrai rigiocare usa il comando /akinator")
                    })
                }) 
            })
            bot.command("N",async(ctx) => {
                let studenti9 = studenti5.filter(studente => studente.altezza<=175)
                await ctx.reply("L'alunno/a ha i capelli biondi? si/no")
                bot.command("si",async(ctx) => {
                    await ctx.reply("stai pensando a " + studenti9[0].nome + " " + studenti9[0].cognome + " che come hobby pratica " + studenti9[0].hobby +"?")
                    await ctx.reply("se vorrai rigiocare usa il comando /akinator")
                })
                bot.command("no",async(ctx) => {
                    await ctx.reply("stai pensando a " + studenti9[1].nome + " " + studenti9[1].cognome + " che come hobby pratica " + studenti9[1].hobby+"?")
                    await ctx.reply("se vorrai rigiocare usa il comando /akinator")
                }) 
            })

    })
    

})






//nome Progetto Bot usernameFMbot

bot.launch()
console.log("lanciato!")



