

new Vue({
    el: '#header',
    data: {
        Title: 'Lydie Costes',
        Subtitle: 'CODER, DANCER, TEACHER, ORGANIZER, FARMER',
       
    }
})

new Vue({
    el: '#featured',
    data: {
        Title: 'Welcome!',
        Subtitle: 'This is the programming portfolio of Lydie Costes',
        Feature1: 'Project 1',
        Subfeature1: 'Will go here',
        Feature2: 'Project 2',
        Subfeature2: 'Will go here',
        Feature3: 'Project 3',
        Subfeature3: 'Will go here',
    }
})

new Vue({
    el: '#quote',
    data: {
        Body: 'To live and work attentively in a diverse landscape such as this one--made up of native woodlands, pastures, croplands, ponds, and streams--is to live from one revelation to another, things unexpected, always of interest, often wonderful.  After a while, you understand that there can be no end to this. The place is essentially interesting, inexhaustibly beautiful and wonderful. To know this is a defense against the incessant salestalk that is always telling you that what you have is not good enough; your life is not good enough. There arent many right answers to that. One of them, one of the best, comes from living watchfully and carefully the life uniquely granted to you by your place: My life, thank you very much, is just fine.',
        Source: ' -- Wendell Berry',
    }
})

new Vue({
    el: '#main',
    data: {
        Item1: 'A Closer Embrace',
        Item1Link: 'Click here for more information.',
        Item2: 'Triangle Zouk',
        Item2Link: 'Click here for more information.',
        Item3: 'RDU Blues',
        Item3Link: 'Click here for more information.',
        Item4: 'Other things',
        Item4Link: 'More information will be available here.',
    }
})

new Vue({
    el: '#counting',
    data: {
        Hifive: 'Click the image to add a high five!',
        counter: 0,
    },
    methods: {
        increment: function(){this.counter = this.counter + 1},
    }
})

new Vue({
    el: '#signup-form',
    data: {
        name: 'ASDF',
        email: 'ASDF',
        subject: 'ASDF',
        message: 'ASDF'
    },
    methods: {
        processForm: function() {
            console.log({name: this.name, email: this.email, subject: this.subject, message: this.message});
            alert('Processing!');
        }
    }
})