# generator-terraform

This is a small [Yeoman](yeoman) generator. It stubs out a simple Terraform module that is setup to test with [Kitchen Terraform](kitchen-terraform).

### Requirements:
- [Yeoman](yeoman)
- [bundler](bundler)

### Using:
```
# Install the generator
npm install git+https://git@github.com/<fixurl>.git
# Run the generator
yo terraform
# Install ruby pre-reqs
bundle install
# Test the module
bundle exec kitchen test
```

[yeoman]: yeoman.io
[kitchen-terraform]: https://github.com/newcontext-oss/kitchen-terraform/
[bundler]: https://bundler.io/
