let user_temperatura = prompt(`inserire temperatura: `)

if (user_temperatura < 20 && user_temperatura >= 0) {
    console.log(`non ci sono piu’ le mezze stagioni`);
    
}else if(user_temperatura >= 30){
    console.log(`lu mare, lu sole, lu ientu`);
    
}else if(user_temperatura < 30 && user_temperatura >= 20){
    console.log(`mi dia una peroni sudata`);
    
}else if(user_temperatura < 0 && user_temperatura >= -10 ){
    console.log(`non e’ tanto il freddo quanto l’umidità`);
    
}else if(user_temperatura < -10){
    console.log(`copriti…ancora ti raffreddi`);
    
}else if(typeof user_temperatura != Number ){
    console.log(`indicare la temperatura a numeri`);
    
}

switch (true) {
    case user_temperatura < 20 && user_temperatura >= 0:
        console.log(`non ci sono piu’ le mezze stagioni`);
        break;

    case user_temperatura >= 30:
        console.log(`lu mare, lu sole, lu ientu`);
        break;
    case user_temperatura < 30 && user_temperatura >= 20:
        console.log(`mi dia una peroni sudata`);
        break;
    case user_temperatura < 0 && user_temperatura >= -10:
        console.log(`non e’ tanto il freddo quanto l’umidità`);
        break;

    case user_temperatura < -10:
        console.log(`copriti…ancora ti raffreddi`);
        break;
    default:
        console.log(`indicare la temperatura a numeri`);
        break;
}