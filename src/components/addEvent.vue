<template>
    <div>
        <h4>Add a Event</h4>
        <div class="form">
            <div class="form-group">
                <label for="">Title</label>
                <input type="text" class="form-control" v-model="event.title">
            </div>
            <div class="form-group">
                <label for="">Description</label>
                <input type="text" class="form-control" v-model="event.description">
            </div>
            <button class="btn btn-primary" @click="addEvent">Submit</button>
        </div>
    </div>
</template>

<script>
import {eventsRef} from '../firebaseApp'

    export default {
        data() {
            return {
                event: {
                    email: '',
                    title: '',
                    description: '',
                }
            }
        },
        methods: {
            addEvent() {
                this.event.email = this.$store.state.user.email;
                eventsRef.push(this.event);
            }
        },
    }
</script>

<style scoped>

</style>