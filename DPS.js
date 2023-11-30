function calculateDPS() {
    var DMG1 = parseFloat(document.getElementById("DMG1").value);
    var DMG2 = parseFloat(document.getElementById("DMG2").value);
    var ATT = parseFloat(document.getElementById("ATT").value);
    var DEX = parseFloat(document.getElementById("DEX").value);
    var FR = parseFloat(document.getElementById("FR").value);

    var DPS = parseInt((DMG1 + DMG2) / 2 * (0.5 + ATT / 50) * (1.5 + 6.5 * (DEX / 75)) * (FR / 100));
    document.getElementById("Damage").value = DPS;
}