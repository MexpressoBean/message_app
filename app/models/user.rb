class User < ApplicationRecord
    validates :username, presence: true, uniqueness: true, length: {minimum: 5, maximum: 32}
    has_many :messages
    has_secure_password
end
