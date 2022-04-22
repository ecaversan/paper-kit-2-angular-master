import json
import requests
import time

job_name = "spring-boot-web-app"   #Give your job name here
user_name = "ecaversan"
token_id = "11ea142775be30f5ba51b71cfaa3d8b320"

def jenkins_job_status(job_name):
        
    try:
        print("montando url")
        url  = "http://localhost:8080/job/%s/lastBuild/api/json" %job_name   #Replace 'your_jenkins_endpoint' with your Jenkins URL
        print(url)
        while True:
            print("passou")
            data = requests.get(url, headers={'Authorization':token_id}).json()

            print("Printing data")
            print(data)
            if data['building']:
                time.sleep(60)
            else:
                if data['result'] == "SUCCESS":
                    print("Job is success")
                    return True
                else:
                    print ("Job status failed")
                    return False
            
    except Exception as e:
            print(str(e))
            return False

if __name__ == "__main__":

    print("método main")

    if jenkins_job_status(job_name):
        print("Put your automation here for 'job is success' condition")
    else:
        print("Put your automation here for 'job is failed' condition")
