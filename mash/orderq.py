import pickle, os
from NetflixQueue import *
from Browser import Browser
import vlib.vdict

def main():  

  username = file('username.txt').read()
  password = file('password.txt').read()

  if not os.path.exists('output'):
    os.mkdir('output')
  
  web = Browser()

  # login
  web.visit('https://www.netflix.com/Login')
  body = {
    'nextpage':'https://www.netflix.com/Default',
    'email':username,
    'movieid':'',
    'trkid':'',    
    'password1':password,
    'SubmitButton':'Click Here to Continue',
  }  
  web.visit('https://www.netflix.com/Login','POST',body)
    
  web.visit('https://www.netflix.com/Queue')
  
  # update queue
  #q = pickle.load(file('queuepickle.txt','r'))
  q = NetflixQueue()
  q.parsehtml(web.history[-1][0])
  
  tosort = {}
  for i in range(len(q.movies)-1):
    tosort[i] = q.movies[i].recrating
  
  sortorder = vlib.vdict.vsort(tosort)
  sortorder.reverse()
  
  body = {
    'updateQueueBtn':'Update Your Queue'    
  }
  # fields : or123456=i, op123456=i, r123456 (checkbox) [for delete?]
  # OP is previous qpos, OR is next
  j = 0
  for i in sortorder:
    j = j + 1
    body['OP'+str(q.movies[i].id)] = q.movies[i].qpos
    body['OR'+str(q.movies[i].id)] = j
    print '#'+str(j)
    print '%d. %s [%r]' % (q.movies[i].qpos,q.movies[i].title,q.movies[i].recrating)
  
  web.visit('http://www.netflix.com/Queue','POST',body)

if __name__=='__main__':
  main()