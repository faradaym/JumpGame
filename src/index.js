import Phaser from "phaser";

var config = {
        type: Phaser.AUTO,
        width: 800,
        height: 600,
        physics: {
            default: 'arcade',
            arcade: {
                gravity: { y: 200 }
            }
        },
        scene: {
            preload: preload,
            create: create
        }
    };

    var game = new Phaser.Game(config);

    function preload ()
    {
        this.load.image("platform", "assets/platform.png");
        this.load.image("sky", "assets/sky.png");
        this.load.spritesheet("dude", "assets/dude.png");
    }

    function create ()
    {
        const platform1 = this.add.image(0, 600, "platform").setDepth(1).setSize(800, 32);
        platform1.setOrigin(0, 1);

        const platform2 = this.add.image(690, 420, "platform").setDepth(1).setSize(800, 32);
        platform2.setOrigin(0, 1);

        const platform3 = this.add.image(0, 220, "platform").setDepth(1).setSize(800, 32);
        platform3.setOrigin(0, 1);

        const boy = this.add.image(0, 567, "dude").setDepth(1);
        platform1.setOrigin(0, 1);



        //console.log(platform1);
        this.add.image(400, 300, 'sky').setDepth(0);

        var particles = this.add.particles('red');

        var emitter = particles.createEmitter({
            speed: 100,
            scale: { start: 1, end: 0 },
            blendMode: 'ADD'
        });

        var logo = this.physics.add.image(400, 100, 'logo');

        logo.setVelocity(100, 200);
        logo.setBounce(1, 1);
        logo.setCollideWorldBounds(true);

        emitter.startFollow(logo);
    }
