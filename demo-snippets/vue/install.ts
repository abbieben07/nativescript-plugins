import { installRichText } from '@abbieben/rich-text';
import Demo2 from './Demo2.vue';
import Development from './Development.vue';
import RichText from './RichText.vue';

export function installPlugin() {
   installRichText()
}

export const demos = [
    { name: 'Rich Text', path: "richtext", component: RichText },
    { name: 'Demo 2', path: "demo2", component: Demo2 },
    { name: 'Development', path: "development", component: Development }
];