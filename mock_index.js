// Generated by CoffeeScript 1.7.1
var application, digitalocean, digitalocean_config, digitalocean_credentials, express, server, uuid;

express = require('express');

application = new express();

digitalocean_credentials = require('./config.json').nautical;

digitalocean = require('nautical').getClient(digitalocean_credentials);

digitalocean_config = require('./config.json').digitalocean;

uuid = require('node-uuid');

console.log(process.argv[2]);

application.get('/droplets', function(request, response) {
  console.log('Droplets mock');
  return response.send('[{"id":2269164,"name":"gc-f118f994-b937-4175-97c4-b0cb8e859f7e","memory":512,"vcpus":1,"disk":20,"region":{"slug":"ams1","name":"Amsterdam 1","sizes":["512mb","1gb","4gb","2gb","8gb"],"available":true,"features":["virtio","backups"]},"image":{"id":5141286,"name":"Ubuntu 14.04 x64","distribution":"Ubuntu","slug":"ubuntu-14-04-x64","public":true,"regions":["nyc1","ams1","sfo1","nyc2","ams2","sgp1","lon1"],"created_at":"2014-07-23T17:08:52Z"},"size":{"slug":"512mb","transfer":1,"price_monthly":5,"price_hourly":0.00744},"locked":true,"status":"active","networks":{"v4":[{"ip_address":"146.185.153.139","netmask":"255.255.255.0","gateway":"146.185.153.1","type":"public"}],"v6":[]},"kernel":{"id":1221,"name":"* Ubuntu 14.04 x64 vmlinuz-3.13.0-24-generic (1221)","version":"3.13.0-24-generic"},"created_at":"2014-08-06T15:54:19Z","features":["virtio"],"backup_ids":[],"snapshot_ids":[],"action_ids":[30280873]}]');
});

application.post('/droplets', function(request, response) {
  var droplet_data;
  droplet_data = {
    name: digitalocean_config.defaults.name_prefix + uuid.v4(),
    region: digitalocean_config.defaults.region,
    size: digitalocean_config.defaults.size,
    image: digitalocean_config.defaults.image,
    ssh_keys: digitalocean_config.defaults.ssh_keys
  };
  console.log("Droplet mock create");
  if (process.argv[2] === 'fail') {
    return response.send('{"id":"unprocessable_entity","message":"Name Only valid hostname characters are allowed. (a-z, A-Z, 0-9, . and -)"}');
  } else {
    return response.send('{"droplet":{"id":2269164,"name":"gc-f118f994-b937-4175-97c4-b0cb8e859f7e","memory":512,"vcpus":1,"disk":20,"region":{"slug":"ams1","name":"Amsterdam 1","sizes":["512mb","1gb","4gb","2gb","8gb"],"available":true,"features":["virtio","backups"]},"image":{"id":5141286,"name":"Ubuntu 14.04 x64","distribution":"Ubuntu","slug":"ubuntu-14-04-x64","public":true,"regions":["nyc1","ams1","sfo1","nyc2","ams2","sgp1","lon1"],"created_at":"2014-07-23T17:08:52Z"},"size":{"slug":"512mb","transfer":1,"price_monthly":5,"price_hourly":0.00744},"locked":true,"status":"new","networks":{},"kernel":{"id":1221,"name":"* Ubuntu 14.04 x64 vmlinuz-3.13.0-24-generic (1221)","version":"3.13.0-24-generic"},"created_at":"2014-08-06T16:02:35Z","features":["virtio"],"backup_ids":[],"snapshot_ids":[],"action_ids":[30281380]},"links":{"actions":[{"id":30281380,"rel":"create","href":"http://api.digitalocean.com/v2/actions/30281380"}]}}');
  }
});

application.get('/droplets/:id', function(request, response) {
  console.log('Droplet mock get by id');
  if (process.argv[2] === 'wip') {
    return response.send('{"droplet":{"id":2269164,"name":"gc-f118f994-b937-4175-97c4-b0cb8e859f7e","memory":512,"vcpus":1,"disk":20,"region":{"slug":"ams1","name":"Amsterdam 1","sizes":["512mb","1gb","4gb","2gb","8gb"],"available":true,"features":["virtio","backups"]},"image":{"id":5141286,"name":"Ubuntu 14.04 x64","distribution":"Ubuntu","slug":"ubuntu-14-04-x64","public":true,"regions":["nyc1","ams1","sfo1","nyc2","ams2","sgp1","lon1"],"created_at":"2014-07-23T17:08:52Z"},"size":{"slug":"512mb","transfer":1,"price_monthly":5,"price_hourly":0.00744},"locked":true,"status":"new","networks":{},"kernel":{"id":1221,"name":"* Ubuntu 14.04 x64 vmlinuz-3.13.0-24-generic (1221)","version":"3.13.0-24-generic"},"created_at":"2014-08-06T15:54:19Z","features":["virtio"],"backup_ids":[],"snapshot_ids":[],"action_ids":[30280873]}}');
  } else {
    return response.send('{"droplet":{"id":2269164,"name":"gc-f118f994-b937-4175-97c4-b0cb8e859f7e","memory":512,"vcpus":1,"disk":20,"region":{"slug":"ams1","name":"Amsterdam 1","sizes":["512mb","1gb","4gb","2gb","8gb"],"available":true,"features":["virtio","backups"]},"image":{"id":5141286,"name":"Ubuntu 14.04 x64","distribution":"Ubuntu","slug":"ubuntu-14-04-x64","public":true,"regions":["nyc1","ams1","sfo1","nyc2","ams2","sgp1","lon1"],"created_at":"2014-07-23T17:08:52Z"},"size":{"slug":"512mb","transfer":1,"price_monthly":5,"price_hourly":0.00744},"locked":true,"status":"active","networks":{"v4":[{"ip_address":"146.185.153.139","netmask":"255.255.255.0","gateway":"146.185.153.1","type":"public"}],"v6":[]},"kernel":{"id":1221,"name":"* Ubuntu 14.04 x64 vmlinuz-3.13.0-24-generic (1221)","version":"3.13.0-24-generic"},"created_at":"2014-08-06T15:54:19Z","features":["virtio"],"backup_ids":[],"snapshot_ids":[],"action_ids":[30280873]}}');
  }
});

application["delete"]('/droplets/:id', function(request, response) {
  console.log("Droplet mock remove " + request.params.id);
  if (process.argv[2] === 'fail') {
    return response.send('bleh');
  } else {
    return response.send('""');
  }
});

application.get('/actions/:id', function(request, response) {
  console.log("Mock Get action " + request.params.id);
  if (process.argv[2] === 'wip') {
    response.send('{"action":{"id":30451157,"status":"in-progress","type":"reboot","started_at":"2014-08-09T10:12:39Z","completed_at":"2014-08-09T10:15:04Z","resource_id":2269164,"resource_type":"droplet","region":"ams1"}}');
  }
  if (process.argv[2] === 'fail') {
    return response.send('{"action":{"id":30451157,"status":"errored","type":"create","started_at":"2014-08-09T10:12:39Z","completed_at":"2014-08-09T10:15:04Z","resource_id":2269164,"resource_type":"droplet","region":"ams1"}}');
  } else {
    return response.send('{"action":{"id":30451157,"status":"completed","type":"create","started_at":"2014-08-09T10:12:39Z","completed_at":"2014-08-09T10:15:04Z","resource_id":2269164,"resource_type":"droplet","region":"ams1"}}');
  }
});

application.post('/droplets/:id/reboot', function(request, response) {
  console.log("Mock Droplet " + request.params.id + " reboot");
  return response.send('{"action":{"id":30451157,"status":"in-progress","type":"reboot","started_at":"2014-08-12T12:51:45Z","completed_at":null,"resource_id":2269164,"resource_type":"droplet","region":"ams1"}}');
});

application.post('/droplets/:id/shutdown', function(request, response) {
  console.log("Mock Droplet " + request.params.id + " shutdown");
  return response.send('{"action":{"id":30451157,"status":"in-progress","type":"shutdown","started_at":"2014-08-12T12:51:45Z","completed_at":null,"resource_id":2269164,"resource_type":"droplet","region":"ams1"}}');
});

application.post('/droplets/:id/power_on', function(request, response) {
  console.log("Mock Droplet " + request.params.id + " power_on");
  return response.send('{"action":{"id":30451157,"status":"in-progress","type":"power_on","started_at":"2014-08-12T12:51:45Z","completed_at":null,"resource_id":2269164,"resource_type":"droplet","region":"ams1"}}');
});

application.post('/droplets/:id/power_off', function(request, response) {
  console.log("Mock Droplet " + request.params.id + " power_off");
  return response.send('{"action":{"id":30451157,"status":"in-progress","type":"power_off","started_at":"2014-08-12T12:51:45Z","completed_at":null,"resource_id":2269164,"resource_type":"droplet","region":"ams1"}}');
});

application.post('/droplets/:id/power_cycle', function(request, response) {
  console.log("Mock Droplet " + request.params.id + " power_cycle");
  return response.send('{"action":{"id":30451157,"status":"in-progress","type":"power_cycle","started_at":"2014-08-12T12:51:45Z","completed_at":null,"resource_id":2269164,"resource_type":"droplet","region":"ams1"}}');
});

application.post('/droplets/:id/resize/:size', function(request, response) {
  console.log("Mock Droplet " + request.params.id + " resize to " + request.params.size);
  return response.send('{"action":{"id":30451157,"status":"in-progress","type":"resize","started_at":"2014-08-12T12:51:45Z","completed_at":null,"resource_id":2269164,"resource_type":"droplet","region":"ams1"}}');
});

application.get('/regions', function(request, response) {
  console.log('Regions');
  return digitalocean.regions.list(function(error, reply) {
    console.log(reply.body);
    return response.send(JSON.stringify(reply.body));
  });
});

application.get('/images', function(request, response) {
  console.log('Images');
  return (function(request, response) {
    var images, images_list;
    images = [];
    images_list = function(error, reply) {
      images = images.concat(reply.body.images);
      if (reply.next) {
        return reply.next(images_list);
      } else {
        console.log("Done");
        return response.send(JSON.stringify(images));
      }
    };
    return digitalocean.images.list(images_list);
  })(request, response);
});

application.get('/sizes', function(request, response) {
  console.log('Sizes');
  return (function(request, response) {
    var sizes, sizes_list;
    sizes = [];
    sizes_list = function(error, reply) {
      sizes = sizes.concat(reply.body.sizes);
      if (reply.next) {
        return reply.next(sizes_list);
      } else {
        console.log("Done");
        return response.send(JSON.stringify(sizes));
      }
    };
    return digitalocean.sizes.list(sizes_list);
  })(request, response);
});

application.get('/keys', function(request, response) {
  console.log('Keys');
  return (function(request, response) {
    var keys, keys_list;
    keys = [];
    keys_list = function(error, reply) {
      keys = keys.concat(reply.body.ssh_keys);
      if (reply.next) {
        return reply.next(keys_list);
      } else {
        return response.send(JSON.stringify(keys));
      }
    };
    return digitalocean.keys.list(keys_list);
  })(request, response);
});

server = application.listen(8000, function() {
  return console.log("Listening on port " + (server.address().port));
});
