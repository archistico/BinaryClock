let tickSpeed = 1000;

let data = new Date();

let giorni = 0;
let mesi = 0;
let anni = 0;
let ore = 0;
let minuti = 0;
let secondi = 0;

let giorniBin = 0;
let mesiBin = 0;
let anniBin = 0;
let oreBin = 0;
let minutiBin = 0;
let secondiBin = 0;

let squareDim = 50;
let draw = SVG().addTo('#svg').size(squareDim*6+1, squareDim*6+1);
let color0 = "#0B090A";
let color1 = "#A4161A";
let colorLine = "#E5383B";

function aggiornaData() {
    data = new Date();
    draw.clear()

    // ----------------------------

    giorni = data.getDate();
    mesi = data.getMonth() + 1;
    anni = Number(String(data.getFullYear()).slice(-2));

    ore = data.getHours();
    minuti = data.getMinutes();
    secondi = data.getSeconds();

    // ----------------------------

    giorniBin = giorni.toString(2).padStart(6, "0");
    mesiBin = mesi.toString(2).padStart(6, "0");
    anniBin = anni.toString(2).padStart(6, "0");

    oreBin = ore.toString(2).padStart(6, "0");
    minutiBin = minuti.toString(2).padStart(6, "0");
    secondiBin = secondi.toString(2).padStart(6, "0");

    let secondiArr = Array.from(secondiBin);
    let minutiArr = Array.from(minutiBin);
    let oreArr = Array.from(oreBin);
    let giorniArr = Array.from(giorniBin);
    let mesiArr = Array.from(mesiBin);
    let anniArr = Array.from(anniBin);

    giorniArr.forEach((el, index) => {
        if (giorniArr[index] == 0) {
            draw
                .rect(squareDim, squareDim)
                .attr({ fill: color0 })
                .move(squareDim * 0, squareDim * index);
        } else {
            draw
                .rect(squareDim, squareDim)
                .attr({ fill: color1 })
                .move(squareDim * 0, squareDim * index);
        }
    });

    mesiArr.forEach((el, index) => {
        if (mesiArr[index] == 0) {
            draw
                .rect(squareDim, squareDim)
                .attr({ fill: color0 })
                .move(squareDim * 1, squareDim * index);
        } else {
            draw
                .rect(squareDim, squareDim)
                .attr({ fill: color1 })
                .move(squareDim * 1, squareDim * index);
        }
    });

    anniArr.forEach((el, index) => {
        if (anniArr[index] == 0) {
            draw
                .rect(squareDim, squareDim)
                .attr({ fill: color0 })
                .move(squareDim * 2, squareDim * index);
        } else {
            draw
                .rect(squareDim, squareDim)
                .attr({ fill: color1 })
                .move(squareDim * 2, squareDim * index);
        }
    });

    oreArr.forEach((el, index) => {
        if (oreArr[index] == 0) {
            draw
                .rect(squareDim, squareDim)
                .attr({ fill: color0 })
                .move(squareDim * 3, squareDim * index);
        } else {
            draw
                .rect(squareDim, squareDim)
                .attr({ fill: color1 })
                .move(squareDim * 3, squareDim * index);
        }
    });

    minutiArr.forEach((el, index) => {
        if (minutiArr[index] == 0) {
            draw
                .rect(squareDim, squareDim)
                .attr({ fill: color0 })
                .move(squareDim * 4, squareDim * index);
        } else {
            draw
                .rect(squareDim, squareDim)
                .attr({ fill: color1 })
                .move(squareDim * 4, squareDim * index);
        }
    });

    secondiArr.forEach((el, index) => {
        if (secondiArr[index] == 0) {
            draw
                .rect(squareDim, squareDim)
                .attr({ fill: color0 })
                .move(squareDim * 5, squareDim * index);
        } else {
            draw
                .rect(squareDim, squareDim)
                .attr({ fill: color1 })
                .move(squareDim * 5, squareDim * index);
        }
    });

    // griglia linee orizzontali
    for (let c = 0; c <= 6; c++) {
        if(c == 0) {
            draw.line(0, squareDim * c, squareDim * 6, squareDim * c).stroke({ color: colorLine, width: 1 })
        } else {
            draw.line(0, squareDim * c, squareDim * 6, squareDim * c).stroke({ color: colorLine, width: 1 })
        }
    }

    // griglia linee verticali
    for (let c = 0; c <= 6; c++) {
        if(c == 0) {
            draw.line(squareDim * c+1, 0, squareDim * c+1, squareDim * 6).stroke({ color: colorLine, width: 1 })
        } else {
            draw.line(squareDim * c, 0, squareDim * c, squareDim * 6).stroke({ color: colorLine, width: 1 })
        }
    }


    // Aggiornamento
    setTimeout(aggiornaData, tickSpeed);
}

aggiornaData();
