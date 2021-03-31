// https://www.codewars.com/kata/5268acac0d3f019add000203

function Automaton() {
    this.states = 1;
}

Automaton.prototype.readCommands = function (commands) {
    // Return true if we end in our accept state, false otherwise.
    for (c of commands) {
        switch (this.states) {
            case 1:
                this.states = this.states + parseInt(c);
                break;
            case 2:
                this.states = 3 - parseInt(c);
                break;
            case 3:
                this.states = 2
        }
    }
    return this.states == 2;
}

var myAutomaton = new Automaton();
