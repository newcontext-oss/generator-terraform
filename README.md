# generator-terraform

This is a small [Yeoman](yeoman) generator. It stubs out a simple Terraform module that is setup to test with [Kitchen Terraform](kitchen-terraform).

### Requirements:
- [Yeoman](yeoman)
- [bundler](bundler)

### Using:
```
# Install the generator from remote github or from local branch
npm install git+https://git@github.com/<fixurl>.git

# local install
git clone https://github.com/newcontext/generator-terraform.git
cd generator-terraform
npm link

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
