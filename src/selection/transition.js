import {Transition, namekey} from "../transition/index";
import {initializeScheduleEntry} from "../transition/schedule";
import {easeCubicInOut} from "d3-ease";

export default function(name) {
  var key = namekey(name),
      transition = new Transition(this._nodes, this._parents, key),
      timing = {time: Date.now(), delay: 0, duration: 250, ease: easeCubicInOut};
  return transition.each(function(d, i) {
    initializeScheduleEntry(this, i, key, transition._id, timing);
  });
}
