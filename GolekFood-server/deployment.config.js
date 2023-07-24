{
    "apps": [{
        "name": "laravel-app",
        "script": "artisan",
        "args": ["serve", "--host=0.0.0.0", "--port=8000"],
        "instances": "1",
        "wait_ready": true,
        "autorestart": true,
        "max_restarts": 1,
        "interpreter" : "php",
        "watch": false,
        "error_file": "log/err.log",
        "out_file": "log/out.log",
        "log_file": "log/combined.log",
        "time": true
    }]
}
