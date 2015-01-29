function Calculatrice(nb) {
  this.result = (typeof nb === "number") ? nb : 0;

  this.add = function(number) {
    if (typeof number !== "number")
      throw new Error("Opération impossible : un nombre est attendu en paramètre");
    this.result += number;
    return this;
  }

  this.sub = function(number) {
    if (typeof number !== "number")
      throw new Error("Opération impossible : un nombre est attendu en paramètre");
    this.result -= number;
    return this;
  }

  this.div = function(number) {
    if (typeof number !== "number" || (typeof number === "number" && nb != 0))
      throw new Error("Opération impossible : un nombre différent de zéro est attendu en paramètre");
    this.result /= number;
    return this;
  }

  this.mult = function(number) {
    if (typeof number !== "number")
      throw new Error("Opération impossible : un nombre est attendu en paramètre");
    this.result *= number;
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
      if (tmp >= 2)
        var res = 1;
        for (var i = this.result ; i > 1 ; i--) {
          res *= i;
        }
        this.result = res;
      }
    } else {
      throw new Error("Opération impossible : un nombre est attendu en mémoire");
    }
    return this;
  }
}
