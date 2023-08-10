<template>
    <div class="container">
        <div>
            <h2>Upload PDF</h2>
            <hr />
            <label>File
                <input type="file" @change="handleFileUpload( $event )" />
            </label>
            <br>
            <button v-on:click="submitFile()">Submit</button>
        </div>
    </div>
</template>

<script>
    import axios from 'axios';

    export default {
        data() {
            return {
                file: '',
            }
        },

        methods: {
            handleFileUpload(event) {
                this.file = event.target.files[0];
            },

            submitFile() {
                let formData = new FormData();

                formData.append('file', this.file);

                axios.post('http://localhost:8000/single-file',
                        formData, {
                            headers: {
                                'Content-Type': 'multipart/form-data'
                            }
                        }
                    ).then(response => {
                        this.$emit('data-sent', response.data.data);
                    })
                    .catch(function (error) {
                        console.log(error);
                    });
            }
        }
    }
</script>