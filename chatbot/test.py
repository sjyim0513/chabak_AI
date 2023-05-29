import sys

sys.stdout.reconfigure(encoding='utf-8')

class mains:
    def run(self):
        a = f'output: {sys.argv[1]}'
        print(a)

if __name__ == '__main__':
    openai_gpt = mains()
    openai_gpt.run()


#print(f'output: {sys.argv[1]}')