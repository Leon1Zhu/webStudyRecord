


const moduleRelation = [
  {
    modudleId: 1,
    moduleName: 'SkyBase',
    moduleDepends: [],
    moduleComponents: [
      {
        componentId: 600,
        componentName: 'yum',
        componentDepends: [],
      },
      {
        componentId: 7,
        componentName: 'os-tuning',
        componentDepends: [6],
      },
      {
        componentId: 8,
        componentName: 'lvm',
        componentDepends: [],
      },
      {
        componentId: 9,
        componentName: 'mellanox',
        componentDepends: [6],
      },
      {
        componentId: 10,
        componentName: 'hosts',
        componentDepends: [],
      },
      {
        componentId: 11,
        componentName: 'cuda',
        componentDepends: [6],
      },
      {
        componentId: 12,
        componentName: 'iptables',
        componentDepends: [6],
      },
      {
        componentId: 13,
        componentName: 'zookeeper',
        componentDepends: [],
      },
      {
        componentId: 14,
        componentName: 'log-aggregation',
        componentDepends: [6],
      },
      {
        componentId: 39,
        componentName: 'ntpd',
        componentDepends: [6],
      },
    ],
  },
  {
    modudleId: 2,
    moduleName: 'SkyFS',
    moduleDepends: [],
    moduleComponents: [
      {
        componentId: 15,
        componentName: 'hdfs',
        componentDepends: [13],
      },
      {
        componentId: 16,
        componentName: 'ceph',
        componentDepends: [10],
      },
    ],
  },
  {
    modudleId: 3,
    moduleName: 'SkyCloundOS',
    moduleDepends: [],
    moduleComponents: [
      {
        componentId: 17,
        componentName: 'docker',
        componentDepends: [6],
      },
      {
        componentId: 18,
        componentName: 'kubernetes',
        componentDepends: [16,17],
      },
      {
        componentId: 19,
        componentName: 'helm',
        componentDepends: [18],
      },
      {
        componentId: 20,
        componentName: 'harbor',
        componentDepends: [17],
      },
      {
        componentId: 21,
        componentName: 'prometheus',
        componentDepends: [18],
      },
      {
        componentId: 22,
        componentName: 'alertmanager',
        componentDepends: [18],
      },
      {
        componentId: 23,
        componentName: 'grafana',
        componentDepends: [18],
      },
      {
        componentId: 24,
        componentName: 'elasticsearch',
        componentDepends: [18],
      },
      {
        componentId: 25,
        componentName: 'fluentd',
        componentDepends: [18],
      },
      {
        componentId: 26,
        componentName: 'kibana',
        componentDepends: [18],
      },
      {
        componentId: 27,
        componentName: 'nvidia-plugin',
        componentDepends: [11,18],
      },
      {
        componentId: 28,
        componentName: 'kubeflow',
        componentDepends: [18],
      },
      {
        componentId: 29,
        componentName: 'spark-operator',
        componentDepends: [18],
      },
      {
        componentId: 30,
        componentName: 'etcd',
        componentDepends: [18],
      },
      {
        componentId: 31,
        componentName: 'genius',
        componentDepends: [18,19,21,24,25,26,27,30],
      },
      {
        componentId: 32,
        componentName: 'pull-images',
        componentDepends: [20],
      },
    ],
  },
  {
    modudleId: 4,
    moduleName: 'SkyIntelligent',
    moduleDepends: [],
    moduleComponents: [
      {
        componentId: 33,
        componentName: 'hawq',
        componentDepends: [7],
      },
      {
        componentId: 34,
        componentName: 'skytsdb',
        componentDepends: [13],
      },
    ],
  },
  {
    modudleId: 5,
    moduleName: 'SkyEdu',
    moduleDepends: [],
    moduleComponents: [
      {
        componentId: 35,
        componentName: 'user-manager',
        componentDepends: [],
      },
      {
        componentId: 36,
        componentName: 'web-mongo',
        componentDepends: [18],
      },
      {
        componentId: 37,
        componentName: 'web',
        componentDepends: [18,19,20],
      },
      {
        componentId: 38,
        componentName: 'nginx-proxy',
        componentDepends: [37],
      },
    ],
  },
]
let id = 0;
const config = {
  maxSize: 50,
  moduleSize: 30,
  componentSize: 15,
  width: 1500,
  height: 400,
  moduleStartWidth:function () {
    return (this.width/moduleRelation.length);
  },
  moduleStartHeight: 200,
  componentStartHeight: 300,
  componentStartWidth: 0,
  componetRenderCount: 0,
}
let componentsCount = 0;
for (let item of moduleRelation) {
  componentsCount += item.moduleComponents.length;
}



config.componentStartWidth = 0;

const getData = function (){
  let data = {
    nodes:[
      {
        "id": "0",
        "name": "总模块",
        "symbolSize": config.maxSize,
        "x": config.width/2,
        "y": 50,
        "attributes": {
          "modularity_class": 0
        },
        "value": moduleRelation.length,
        "label": {
          "normal": {
            "show": true
          }
        },
        "category": 0
      }
    ],
    links:[],
  };
  for (let i =0,len = moduleRelation.length; i < len; i++) {
    data.nodes.push({
      "id": ''+moduleRelation[i].modudleId+'',
      "name": moduleRelation[i].moduleName,
      "itemStyle": null,
      "symbolSize": config.moduleSize,
      "x": config.moduleStartWidth() + ((config.width / moduleRelation.length) * i),
      "y": config.moduleStartHeight,
      "attributes": {
        "modularity_class": 0
      },
      "value": moduleRelation[i].moduleDepends.length,
      "label": {
        "normal": {
          "show": true
        }
      },
      "category": i+1,
    })
    data.links.push({
      "name": id,
      "source": '0',
      "target": ''+moduleRelation[i].modudleId+'',
      "lineStyle": {
        type: 'solid',
      }
    })
    id++;
    for (let j=0, componentsLen = moduleRelation[i].moduleComponents.length; j < componentsLen ; j++) {
      const item = moduleRelation[i].moduleComponents[j];
      let labelPosition = (j % 2 ===0) ? 'top' : 'bottom';
      data.nodes.push({
        "id": ''+item.componentId+'',
        "name": item.componentName,
        "itemStyle": null,
        "symbolSize": ''+config.componentSize+'' ,
        "x": config.componentStartWidth + (((config.width / componentsCount) * config.componetRenderCount) + config.componentStartWidth*3),
        "y": config.componentStartHeight + 50 * i,
        "attributes": {
          "modularity_class": 0
        },
        "value": item.componentDepends.length,
        "label": {
          "normal": {
            'position': ''+labelPosition+'',
            fontSize: '14'
          },
        },
        "category": i+1,
      })
      data.links.push({
        name: id,
        "source":''+ moduleRelation[i].modudleId+'',
        "target": ''+item.componentId+'',
        "lineStyle": {
          type: 'solid',
        },
      })
      id++;
      config.componetRenderCount ++;
      for (let n = 0,dependsLen = item.componentDepends.length ; n < dependsLen ; n++) {
        data.links.push({
          "id": id,
          "name": null,
          "source": ''+item.componentDepends[n]+'',
          "target": ''+item.componentId+'',
          "lineStyle": {
            type: 'solid',
          }
        })
        id++;
      }
    }
  }

  return data;
}




