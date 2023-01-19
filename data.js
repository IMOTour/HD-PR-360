var APP_DATA = {
  "scenes": [
    {
      "id": "0-lower-entrance",
      "name": "Lower entrance",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 2.9241468546716067,
        "pitch": -0.08767857480832042,
        "fov": 1.504926290239017
      },
      "linkHotspots": [
        {
          "yaw": -3.003483098497668,
          "pitch": -0.1417851407899846,
          "rotation": 0,
          "target": "1-winery"
        },
        {
          "yaw": 2.2317342297801996,
          "pitch": -0.09867624717969647,
          "rotation": 0,
          "target": "2-side-stairs"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.5460420319100798,
          "pitch": 0.2908036719619016,
          "title": "Street - lower access",
          "text": "<span style=\"font-size: 16px; background-color: rgba(103, 115, 131, 0.8);\">Street - lower access</span>"
        }
      ]
    },
    {
      "id": "1-winery",
      "name": "Winery",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 0.5213531287713558,
        "pitch": 0.30982193960544535,
        "fov": 1.4870934617394305
      },
      "linkHotspots": [
        {
          "yaw": 2.000076258793241,
          "pitch": -0.007719439307994236,
          "rotation": 0.7853981633974483,
          "target": "0-lower-entrance"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-side-stairs",
      "name": "Side stairs",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -0.7206574948786013,
        "pitch": -0.000896569276157777,
        "fov": 1.504926290239017
      },
      "linkHotspots": [
        {
          "yaw": 1.1975143479406345,
          "pitch": 0.5264227842597045,
          "rotation": 3.141592653589793,
          "target": "0-lower-entrance"
        },
        {
          "yaw": -0.9178213103798463,
          "pitch": -0.5910448056826496,
          "rotation": 4.71238898038469,
          "target": "3-terrace-view"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -1.8802117943189387,
          "pitch": -0.09765954669788712,
          "title": "Storage area",
          "text": "<span style=\"font-size: 16px; background-color: rgba(103, 115, 131, 0.8);\">Storage area</span>"
        }
      ]
    },
    {
      "id": "3-terrace-view",
      "name": "Terrace view",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -1.5003789859308156,
        "pitch": 0.07216233832753005,
        "fov": 1.4213793912997028
      },
      "linkHotspots": [
        {
          "yaw": -2.4990175936674888,
          "pitch": 0.535084294987346,
          "rotation": 3.141592653589793,
          "target": "2-side-stairs"
        },
        {
          "yaw": 2.303211103689544,
          "pitch": -0.042062283605991624,
          "rotation": 0.7853981633974483,
          "target": "4-vineyard"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-vineyard",
      "name": "Vineyard",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 1.9246882810236343,
        "pitch": 0.014978792842720523,
        "fov": 1.4213793912997028
      },
      "linkHotspots": [
        {
          "yaw": 0.6270721159326804,
          "pitch": 0.10259461103642664,
          "rotation": 5.497787143782138,
          "target": "3-terrace-view"
        },
        {
          "yaw": -0.8390716972125212,
          "pitch": 0.07817827542740297,
          "rotation": 0,
          "target": "13-kitchen"
        },
        {
          "yaw": -2.5113831964817663,
          "pitch": 0.15407848524717238,
          "rotation": 0,
          "target": "5-stairs-to-higher-entrance"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-stairs-to-higher-entrance",
      "name": "Stairs to higher entrance",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -0.2401832969845561,
        "pitch": 0.024054282300186358,
        "fov": 1.4213793912997028
      },
      "linkHotspots": [
        {
          "yaw": 0.540736845573111,
          "pitch": -0.022330461682411595,
          "rotation": 3.141592653589793,
          "target": "4-vineyard"
        },
        {
          "yaw": 0.05847590544306236,
          "pitch": 0.4059150615454197,
          "rotation": 3.141592653589793,
          "target": "6-main-door"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-main-door",
      "name": "Main door",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -0.8388367054191193,
        "pitch": 0.17978532187687435,
        "fov": 1.4213793912997028
      },
      "linkHotspots": [
        {
          "yaw": 2.5137407644485554,
          "pitch": -0.4381093036478205,
          "rotation": 9.42477796076938,
          "target": "5-stairs-to-higher-entrance"
        },
        {
          "yaw": -1.5070172160578892,
          "pitch": 0.2697036804263888,
          "rotation": 0,
          "target": "7-sitting-room"
        },
        {
          "yaw": -0.5813665865917788,
          "pitch": 0.010682516167005218,
          "rotation": 0,
          "target": "12-kitchen-access"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 3.049772586214198,
          "pitch": 0.380588141297741,
          "title": "Higher street access",
          "text": "<span style=\"font-size: 16px; background-color: rgba(103, 115, 131, 0.8);\">Higher street access</span>"
        },
        {
          "yaw": -2.8242705736883202,
          "pitch": 0.1383839734286294,
          "title": "Neighbour's property",
          "text": "<span style=\"font-size: 16px; background-color: rgba(103, 115, 131, 0.8);\">Neighbour's property</span>"
        }
      ]
    },
    {
      "id": "7-sitting-room",
      "name": "Sitting room",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 1.5691662850946049,
        "pitch": 0.277306148942829,
        "fov": 1.4213793912997028
      },
      "linkHotspots": [
        {
          "yaw": -2.1772967587975796,
          "pitch": 0.04387198518042368,
          "rotation": 3.141592653589793,
          "target": "6-main-door"
        },
        {
          "yaw": 0.61804961349387,
          "pitch": 0.21294566154973182,
          "rotation": 0,
          "target": "8-wc"
        },
        {
          "yaw": 1.2253629580290593,
          "pitch": 0.11997038206913047,
          "rotation": 0,
          "target": "10-balcony"
        },
        {
          "yaw": 2.252397173998137,
          "pitch": 0.13906135919008378,
          "rotation": 0,
          "target": "11-main-bedroom"
        },
        {
          "yaw": 1.6479081949774423,
          "pitch": 0.12213369555818332,
          "rotation": 0,
          "target": "9-bedroom-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-wc",
      "name": "WC",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 0.6453639940435316,
        "pitch": 0.684832936869082,
        "fov": 1.4213793912997028
      },
      "linkHotspots": [
        {
          "yaw": 0.9461222394938478,
          "pitch": 0.2194680208330375,
          "rotation": 0,
          "target": "7-sitting-room"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "9-bedroom-2",
      "name": "Bedroom 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -0.11839026200362746,
        "pitch": 0.22886164850752166,
        "fov": 1.4213793912997028
      },
      "linkHotspots": [
        {
          "yaw": -0.7432084246241359,
          "pitch": 0.04828044858425251,
          "rotation": 4.71238898038469,
          "target": "7-sitting-room"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "10-balcony",
      "name": "Balcony",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 2.1356566478828736,
        "pitch": 0.1426263962708738,
        "fov": 1.4213793912997028
      },
      "linkHotspots": [
        {
          "yaw": -0.9339265574062061,
          "pitch": 0.3256357729946284,
          "rotation": 0,
          "target": "7-sitting-room"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "11-main-bedroom",
      "name": "Main bedroom",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -1.697971144151122,
        "pitch": 0.3644231264025386,
        "fov": 1.4213793912997028
      },
      "linkHotspots": [
        {
          "yaw": 0.38899466150446393,
          "pitch": 0.1349383152498902,
          "rotation": 0,
          "target": "7-sitting-room"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "12-kitchen-access",
      "name": "Kitchen access",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -2.1700813498618388,
        "pitch": 0.008751999364545071,
        "fov": 1.4213793912997028
      },
      "linkHotspots": [
        {
          "yaw": -2.157752698157797,
          "pitch": -0.4747472536926409,
          "rotation": 0,
          "target": "13-kitchen"
        },
        {
          "yaw": 1.6347027978978428,
          "pitch": 0.22524939721794368,
          "rotation": 5.497787143782138,
          "target": "6-main-door"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "13-kitchen",
      "name": "Kitchen",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -0.9078914549365038,
        "pitch": 0.23179417765811117,
        "fov": 1.4213793912997028
      },
      "linkHotspots": [
        {
          "yaw": 1.3938275891722611,
          "pitch": 0.6952873058576756,
          "rotation": 3.9269908169872414,
          "target": "12-kitchen-access"
        },
        {
          "yaw": -1.460593219242483,
          "pitch": 0.015285141646238287,
          "rotation": 4.71238898038469,
          "target": "4-vineyard"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": false,
    "viewControlButtons": true
  }
};
