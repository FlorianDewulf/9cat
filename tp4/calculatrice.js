function Calculatrice(nb) {
  this.memory = 0;
  this.result = (typeof nb === "number") ? nb : 0;

  this.clear = function() {
    this.result = 0;
  }

  this.getMemory = function() {
    return this.memory;
  }

  this.setMemory = function(number) {
    if (typeof number === "undefined") {
      this.memory = this.result;
    } else if (typeof number === "number") {
      this.memory = parseFloat(number);
    } else {
      throw new Error("Opération impossible : un nombre est attendu en paramètre (pour set un nombre directement) ou aucun paramètre (pour le résultat actuel en mémoire)");
    }
    return this;
  }

  this.resultat = function() {
    return this.result;
  }

  this.add = function(number) {
    console.log(number);
    console.log(parseFloat(number));
    if (typeof number !== "number")
      throw new Error("Opération impossible : un nombre est attendu en paramètre");
    this.result += parseFloat(number);
    return this;
  }

  this.sub = function(number) {
    if (typeof number !== "number")
      throw new Error("Opération impossible : un nombre est attendu en paramètre");
    this.result -= parseFloat(number);
    return this;
  }

  this.div = function(number) {
    if (typeof number !== "number" || (typeof number === "number" && number == 0))
      throw new Error("Opération impossible : un nombre différent de zéro est attendu en paramètre");
    this.result /= parseFloat(number);
    return this;
  }

  this.mult = function(number) {
    if (typeof number !== "number")
      throw new Error("Opération impossible : un nombre est attendu en paramètre");
    this.result *= parseFloat(number);
    return this;
  }

  this.sin = function() {
    this.result = Math.sin(this.result);
    return this;
  }

  this.cos = function() {
    this.result = Math.cos(this.result);
    return this;
  }

  this.tan = function() {
    this.result = Math.tan(this.result);
    return this;
  }

  this.factorielle = function() {
    if (this.result >= 0) {
      var res = 1;
      for (var i = this.result ; i > 1 ; i--) {
        res *= i;
      }
      this.result = res;
    } else {
      throw new Error("Opération impossible : un nombre est attendu en mémoire");
    }
    return this;
  }
}
