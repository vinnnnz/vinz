const skilldata = {
  "name": "Skills",
  "children": [{
      "name": "Language",
      "children": [{
        "name": "Java",
        "children":[{
          "name": "framework",
          "children": [{
              "name": "Spring Boot",
          }, {
            "name": "Hibernate"
          }, {
            "name": "Play"
          }]
        }]
      }],
  }, 
  
  {
    "name": "Container",
    "children": [{
      "name": "Docker"
    }],
  },
  
  {
    "name": "Cluster",
    "children": [{"name": "Kubernetes"}, {"name": "ArgoCD"}, {"name": "Intuit Kubernetes Service (IKS)"}]
  },
  {
    "name": "Server",
    "children": [{"name": "Apache Tomcat"},
                {"name": "Nginx"},
                {"name": "Websphere"},
                {"name": "JBoss"}]  
  },
  {
    "name": "Script",
    "children": [{"name": "Javascript", "children": [{
      "name": "Framework & Library",
      "children": [{"name": "Angular"}, {"name": "ReactJS"}, {"name": "Dojo Toolkit"}, {"name": "BackboneJS"}, {"name": "Jasmine"}]
    }]},
                 {"name": "Python"}]
  },
  {
    "name": "NodeJS",
    "children": [{"name": "ExpressJS"}]
  }, 
  {
    "name": "Log & Server Monitoring",
    "children": [{"name": "Splunk"}, {"name": "App Dynamic"}]
  }, {
    "name": "Analytics",
    "children": [{"name": "Adobe Analytics"}]
  }, {
    "name": "CRM Tool",
    "children": [{"name": "Salesforce"}, {"name": "Siebel"}]
  }, {
    "name": "ABTest tool",
    "children": [{"name": "Intuit ABtest tool"}]
  }, {
    "name": "Kill Switch",
    "children": [{"name": "LaunchDarkly"}]
  }, {
    "name": "CI/CD",
    "children": [{"name": "Jenkins"}]
  }, {
    "name": "Cloud",
    "children": [{"name": "AWS"}]
  }]
};

  export default skilldata;