<template>
    <div>
        <single-file @data-sent="handleDataFromChild" />
        <br />
        <div>
            <h2>Result Table</h2>
            <hr />
            <Table :items="dataReceived" />
        </div>
    </div>
</template>

<script>
    import SingleFile from '../../components/SingleFile.vue'
    import Table from '../../components/Table.vue'

    export default {
        name: 'KnowledgeBaseGenerator',
        components: {
            SingleFile,
            Table
        },
        data() {
            return {
                dataReceived: {}
            }
        },

        methods: {
            handleDataFromChild(data) {
                this.dataReceived = data;
            }
        },

    }
</script>

<style>
    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
        margin: auto;
    }
</style>