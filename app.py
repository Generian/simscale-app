from __future__ import print_function

import time
import simscale_sdk
from simscale_sdk.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api-staging.simscale.com/v0
# See configuration.py for a list of all supported configuration parameters.
configuration = simscale_sdk.Configuration(
    host = "https://api-staging.simscale.com/v0"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKey
configuration = simscale_sdk.Configuration(
    host = "https://api-staging.simscale.com/v0",
    api_key = {
        'X-API-KEY': 'YOUR_API_KEY'
    }
)
# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['X-API-KEY'] = 'Bearer'


# Enter a context with an instance of the API client
with simscale_sdk.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = simscale_sdk.GeometriesApi(api_client)
    project_id = '1234123412341234' # str | The project ID
limit = 100 # int | The number of items to return. (optional) (default to 100)
page = 1 # int | The page number. Use in combination with limit. (optional) (default to 1)

    try:
        # List geometries within a project
        api_response = api_instance.get_geometries(project_id, limit=limit, page=page)
        pprint(api_response)
    except ApiException as e:
        print("Exception when calling GeometriesApi->get_geometries: %s\n" % e)