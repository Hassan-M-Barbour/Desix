<script setup>
import UiChildCard from '~/components/shared/UiChildCard.vue';
const desserts = ref([
    {
        id:1,
        name: "Frozen Yogurt",
        email:"hbarbour@rosetech.se",
        subject:"Hello",
        phone:"0999306026",
        message:"Hello man how are you?",
        calories: 159,
    },
    {
        id:2,
        name: "Ice cream sandwich",
        email:"hbarbour@rosetech.se",
        subject:"Hello",
        phone:"0999306026",
        message:"Hello man how are you?",
        calories: 237,
    },
    {
        id:3,
        name: "Eclair",
        email:"hbarbour@rosetech.se",
        subject:"Hello",
        phone:"0999306026",
        message:"Hello man how are you?",
        calories: 262,
    },
    {
        id:4,
        name: "Cupcake",
        email:"hbarbour@rosetech.se",
        subject:"Hello",
        phone:"0999306026",
        message:"Hello man how are you?",
        calories: 305,
    },
    {
        id:5,
        name: "Gingerbread",
        email:"hbarbour@rosetech.se",
        subject:"Hello",
        phone:"0999306026",
        message:"Hello man how are you?",
        calories: 356,
    },
    {
        id:6,
        name: "Jelly bean",
        email:"hbarbour@rosetech.se",
        subject:"Hello",
        phone:"0999306026",
        message:"Hello man how are you?",
        calories: 375,
    },
    {
        id:7,
        name: "Lollipop",
        email:"hbarbour@rosetech.se",
        subject:"Hello",
        phone:"0999306026",
        message:"Hello man how are you?",
        calories: 392,
    },
    {
        id:8,
        name: "Honeycomb",
        email:"hbarbour@rosetech.se",
        subject:"Hello",
        phone:"0999306026",
        message:"Hello man how are you?",
        calories: 408,
    },
    {
        id:9,
        name: "Donut",
        email:"hbarbour@rosetech.se",
        subject:"Hello",
        phone:"0999306026",
        message:"Hello man how are you?",
        calories: 452,
    },
    {
        id:10,
        name: "KitKat",
        email:"hbarbour@rosetech.se",
        subject:"Hello",
        phone:"0999306026",
        message:"Hello man how are you?",
        calories: 518,
    },
    {
        id:11,
        name: "حسان",
        email:"hbarbour@rosetech.se",
        subject:"Hello",
        phone:"0999306026",
        message:"Hello man how are you?",
        calories: 518,
    },
]);

definePageMeta({
  layout: 'dashboard'
})
</script>

<template>
<v-row class="month-table">
    <v-col cols="12" sm="12" >
            <UiChildCard title="Contacts List">
                <v-table>
                    <thead>
                        <tr>
                            <th class="text-left">ID</th>
                            <th class="text-left">Name</th>
                            <th class="text-left">Email</th>
                            <th class="text-left">Subject</th>
                            <th class="text-left">Phone</th>
                            <th class="text-left">Message</th>
                            <th class="text-left">Options</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="item in desserts" :key="item.name">
                            <td>{{ item.id }}</td>
                            <td>{{ item.name }}</td>
                            <td>{{ item.email }}</td>
                            <td>{{ item.subject }}</td>
                            <td>{{ item.phone }}</td>
                            <td>{{ item.message }}</td>
                            <td>
                                Delete  Edit Email
                            </td>
                        </tr>
                    </tbody>
                </v-table>

            </UiChildCard>
        </v-col>
</v-row>
</template>