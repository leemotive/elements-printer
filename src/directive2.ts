// eslint-disable-next-line import/no-extraneous-dependencies
import { ObjectDirective } from 'vue2';
import { mounted, unmounted, updated } from './common';

const printElement: ObjectDirective<Element> = {
  bind: mounted,
  componentUpdated: updated,
  unbind: unmounted,
};

export default printElement;
