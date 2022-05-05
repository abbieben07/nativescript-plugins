import { installRichText } from '@abbieben/rich-text';
import Checkbox from './Checkbox.vue';
import Flutterwave from './Flutterwave.vue';
import Paystack from './Paystack.vue';
import RichText from './RichText.vue';

export function installPlugin() {
    installRichText()
}

export const demos = [
    {
        name: 'Rich Text', 
        path: "richtext", 
        component: RichText
    },
    {
        name: 'Flutterwave', 
        path: "flutterwave", 
        component: Flutterwave
    },
    {
        name: 'Paystack', 
        path: "paytack", 
        component: Paystack
    },
    {
        name: 'Checkbox', 
        path: "checkbox", 
        component: Checkbox
    }
];