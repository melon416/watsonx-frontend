<template>
    <div>
        <h2>Upload PDF</h2>

        <div class="container">
            <div class="input-group">
                <div class="custom-file">
                    <input type="file" v-on:change="handleFileUpload( $event )" class="custom-file-input" id="file-input" accept=".pdf">
                    <label class="custom-file-label text-left" for="file-input">{{ file ? file.name : 'Choose file'}}</label>
                </div>
            </div>
            <progress max="100" :value.prop="uploadPercentage" v-if="showProgress" class="mt-2 w-100"></progress>
            <button v-on:click="submitFile()" class="mt-2 btn btn-primary">Submit</button>
        </div>
    </div>
</template>

<script>
    import axios from 'axios';

    export default {
        data() {
            return {
                file: '',
                uploadPercentage: 0,
                showProgress: false
            }
        },

        methods: {
            handleFileUpload(event) {
                this.file = event.target.files[0];
            },

            submitFile() {
                this.showProgress = true
                this.$emit('data-sent', {});
                /*
                	Initialize the form data
                */
                let formData = new FormData();

                /*
                	Add the form data we need to submit
                */
                formData.append('file', this.file);

                /*
                	Make the request to the POST /single-file URL
                */
                axios.post('http://localhost:8000/single-file',
                        formData, {
                            headers: {
                                'Content-Type': 'multipart/form-data'
                            },
                            onUploadProgress: function (progressEvent) {
                                this.uploadPercentage = parseInt(Math.round((progressEvent.loaded / progressEvent.total) * 100));
                            }.bind(this)
                        }
                    ).then(response => {
                        this.$emit('data-sent', response.data.data);
                        // this.showProgress = false
                    })
                    .catch(function () {
                        console.log('FAILURE!!');
                    });
            },
        }
    }
</script>

<style>
    .container {
        display: inline-flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        max-width: 400px;
    }

    .btn-primary {
        max-width: 50%;
    }
</style>