import { Radio } from './device/radio';
import { Tv } from './device/tv';
import { RemoteControl } from './remote-control/remote-control';
import { RemoteControlWithVolume } from './remote-control/remote-control-with-volume';

export function clientCode(
  abstraction: RemoteControl | RemoteControlWithVolume,
): void {
  abstraction.togglePower();

  // Type Guard
  if (!('volumeUp' in abstraction)) return;
  // if (!(abstraction instanceof RemoteControlWithVolume)) return;

  abstraction.volumeUp();
  abstraction.volumeUp();
  abstraction.volumeUp();
  abstraction.volumeDown();
  abstraction.volumeDown();
  abstraction.volumeDown();
}

const radio = new Radio('radio');
const radioRemoteControl = new RemoteControlWithVolume(radio);
clientCode(radioRemoteControl);

const tv = new Tv('Samsung');
const tvRemoteControl = new RemoteControl(tv);
clientCode(tvRemoteControl);
