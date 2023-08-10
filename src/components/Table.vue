<template>
    <div class="table-container">
        <table class="styled-table">
            <thead>
                <th></th>
                <th>File</th>
                <th>Input</th>
                <th>Output</th>
            </thead>
            <tr v-for="(file, index) in items.file" :key="index">
                <td>{{ index+1 }}</td>
                <td>{{ file }}</td>
                <td>{{ truncateText(items.input[index]) }}</td>
                <td>{{ items.output[index] }}</td>
            </tr>
        </table>
    </div>
</template>

<script>
    export default {
        name: "Table",
        props: ['items'],
        data() {
            return {

            }
        },
        computed: {},
        methods: {
            truncateText(value) {
                const maxLength = 100;
                if (value.length <= maxLength) {
                    return value;
                }
                const truncated = value.substr(0, maxLength);
                return truncated.substr(0, Math.min(truncated.length, truncated.lastIndexOf(' '))) + ' ...';
            },
        }

    }
</script>

<style>
    /* Container styles */
    .table-container {
        max-width: 100%;
        overflow: auto;
    }

    /* Table styles */
    .styled-table {
        width: 100%;
        border-collapse: collapse;
        border: 1px solid #ddd;
    }

    .styled-table th,
    .styled-table td {
        padding: 8px;
        border: 1px solid #ddd;
        text-align: left;
    }

    /* Apply ellipsis to overflowing data */
    .styled-table td,
    .styled-table th {
        width: 100px;
        /* Adjust the width as needed */
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
</style>