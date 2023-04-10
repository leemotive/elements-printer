// eslint-disable-next-line import/no-extraneous-dependencies
import { ObjectDirective } from 'vue3';
import { mounted, updated, unmounted } from './common';

const printElement: ObjectDirective<Element> = {
  mounted,
  updated,
  unmounted,
};

export default printElement;
