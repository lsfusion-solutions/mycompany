---
title: OpenAI and GPT configurations
---

## Where to find it

Open **"Administration" -> "Application" -> "Integration data"** and use the **OpenAI** block.

## API key

Fill **API key** with the OpenAI key used for all GPT requests.

## GPT configurations

Use **GPT configurations** to define reusable request defaults:

- **Name** - what users see when selecting a configuration.
- **Model** - OpenAI model used for the request. If both the request and the configuration leave it empty, the system uses `gpt-5`.
- **Reasoning** - optional reasoning effort value supported by the selected model. Leave it empty if it should not be sent.
- **Additional prompt** - text appended to the import or request prompt, for example common formatting rules or company-specific instructions.

If exactly one configuration exists, it is selected automatically for import actions that create GPT requests. If several configurations exist, the system asks the user to select one before sending the file.

## GPT requests

The same OpenAI block shows GPT request history. The request card contains:

- configuration, model, reasoning, and image generation flag;
- prompt, response, status, response ID, sent time, and token counts;
- input files and output files created by OpenAI;
- request and response debug files.

Use **Send** on the request card for manual requests. The request stores the effective model, reasoning, and additional prompt used at send time.
