import os, sys

if __name__ == '__main__':
    key = sys.argv[1]
    cmd = "asciidoctor -a stylesheet=../asciidoctor-rzmk.css -a nofooter -D {key} -o index.html {key}/{key}.ad".format(key=key)
    print cmd
    os.system(cmd)
