import time
import os
import logging
from datetime import datetime

# Ensure the log directory exists
log_directory = 'log'
if not os.path.exists(log_directory):
    os.makedirs(log_directory)

# Configure logging settings
logging.basicConfig(
    filename=os.path.join(log_directory, 'execution_log.log'),
    level=logging.INFO,
    format='%(asctime)s - %(message)s',
    datefmt='%Y-%m-%d %H:%M:%S'
)

def time_it(func):
    """
    A decorator that prints the execution time of a function.

    Args:
        func (function): The function to be timed.

    Returns:
        function: The decorated function with the additional logging functionality.
    """
    def wrapper(*args, **kwargs):
        start_time = time.time()
        result = func(*args, **kwargs)
        end_time = time.time()
        execution_time = end_time - start_time

        # Log the details to the log file
        log_message = (
            f"Function: {func.__name__}\n"
            f"Execution Time: {execution_time:.6f} seconds\n"
            f"Arguments: {args} {kwargs}\n"
            f"Output: {result}\n"
            "-------------------------------------"
        )
        logging.info(log_message)

        # Print the execution time to the console
        print(f"{func.__name__} took {execution_time:.6f} seconds to execute.")

        return result
    return wrapper

