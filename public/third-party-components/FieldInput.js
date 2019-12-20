export default {
    name: 'field-input',
    props: {
        label: {
            type: String
        },
        value: {
            default: () => (undefined)
        }
    },
    template: `<div class="field-input">
        <label>{{ label }}</label>
        <input class="input-field" :value="value" @input="$emit('input', $event.target.value)" />
        </div>`
}