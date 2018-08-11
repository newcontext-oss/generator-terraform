environment = attribute('environment', {})
id = attribute('id', {})
control 'my_control' do
  describe environment do
    it { should eq 'TEST' }
  end

  describe id do
    it { should_not be_empty }
  end
end
