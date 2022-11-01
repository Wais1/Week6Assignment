import gym
import matplotlib.pyplot as plt
import numpy as np
import random
from IPython.display import clear_output

import warnings
warnings.simplefilter('ignore')

import seaborn as sns
sns.set()

np.random.seed(0) 

# Render the Taxi gym environment
env = gym.make("Taxi-v3").env
env.reset()
env.render()

# Determine actions and observation space
print("Action Space {}".format(env.action_space))
print("State Space {}".format(env.observation_space))

#1. Initialize an empty Q-table with all zeros, as the agent has not learned
#  anything new yet.
Q = np.zeros((env.observation_space.n, env.action_space.n))

# Hyperparameters.
# OpenAI recommendations cite that any illegal move costs -10 points, any action
# Takes 1 point, and successfully delivering a passenger results as 20 points.
alpha = 0.7 # Learning rate or step size.                
discount_factor = 0.618 # / Gamma,. It's multiplied by value of the estimation of optimal future values.
                        #  For example, setting this to 0 will dismiss all future values.
epsilon = 1                 
max_epsilon = 1
min_epsilon = 0.01         
decay = 0.01         

train_episodes = 2000  # Number of episodes to train on. 2000 makes good learning while 100 keeps the algorithm from
                        # Learningh how to optimize properly
test_episodes = 100          
max_steps = 100 

# An epsilon greedy algorithm creates a probability for our agent to explore the world through
# random actions in order to discover more ideal routes and scenarios.
# Otherwise the agent shall only pick the routes it knows to be best, which limits its 
# optimization and performance to the local maxima as opposed to discovering the 
# global maxima. This algorithm is highly important to balance exploration and exploitation.

# Training the agent

# Creating lists to keep track of reward and epsilon values for graphing
training_rewards = []  
epsilons = []

for episode in range(train_episodes):
    #Reseting the environment each time as per requirement
    state = env.reset()    
    #Starting the tracker for the rewards
    total_training_rewards = 0
    
    for step in range(100):
        # Choosing an action given the states based on a random number
        exp_exp_tradeoff = random.uniform(0, 1) 
        
        
        # 2. Another option for initial action is exploitation.
        # If the random number is larger than epsilon: employing exploitation 
        # and selecting best action. Otherwise explore.
        if exp_exp_tradeoff > epsilon:
            action = np.argmax(Q[state,:])      
        else:
            action = env.action_space.sample()
            
            
        # 3/4. Take the just decided action and receive the reward!
        # Store outcomes for future learning!
        new_state, reward, done, info = env.step(action)
        env.render()

        # 5. Agent learns! Update the Q-table, with the rewards found in the current state.
        # This update is following the Bellman equation. and used as a continuous learning cycle...
        Q[state, action] = Q[state, action] + alpha * (reward + discount_factor * np.max(Q[new_state, :]) - Q[state, action]) 

        # Update state value, and increase total reweards for the episode to measure progress. This shall be represented as a graph.
        total_training_rewards += reward      
        # Set our state to the new state, returned by (env.step(action)), which is the next frame in the world.
        state = new_state         
        
        # End episode. If done is ture, the agent has reached the goal. Thus, break loop, which 
        # Shall reset the episode once more from the beginning.
        if done == True:
            print ("Total reward for episode {}: {}".format(episode, total_training_rewards))
            break
    
    # REDUCE exploration now, by lowering the epsilon value!
    epsilon = min_epsilon + (max_epsilon - min_epsilon)*np.exp(-decay*episode)

    # Adding the total reward and reduced epsilon values
    training_rewards.append(total_training_rewards)
    epsilons.append(epsilon)
    
    

print ("Training score over time: " + str(sum(training_rewards)/train_episodes))

# Visualizing results and total reward over all episodes
x = range(train_episodes)
plt.plot(x, training_rewards)
plt.xlabel('Episode')
plt.ylabel('Training total reward')
plt.title('Total rewards over all episodes in training') 
plt.show()

# Visualizing the epsilons over all episodes as we reduce it each episode to rely less on exploration
# and more on exploitation
plt.plot(epsilons)
plt.xlabel('Episode')
plt.ylabel('Epsilon')
plt.title("Epsilon for episode")
plt.show()