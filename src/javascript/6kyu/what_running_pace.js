// https://www.codewars.com/kata/578b8c0e84ac69a4d20004c8

function runningPace(distance, time) {
    let t = time.split(':');
    let secs = 60 * parseInt(t[0]) + parseInt(t[1]);
    let pace = Math.floor(1.0 * secs / distance);
    return `${Math.floor(pace / 60)}:` + (pace % 60 < 10 ? `0${pace % 60}` : `${pace % 60}`)
}