# String
#

# Concatenação
string = 'Ola, ' + 'Mundo'
assert_equal 'Ola, Mundo', string

ola = 'Ola, '
mundo = 'Mundo'
string = ola + mundo
assert_equal 'Ola, ', ola
assert_equal 'Mundo', mundo

ola = 'Ola, '
mundo = 'Mundo'
ola += mundo
assert_equal 'Ola, Mundo', ola

# Quebra de linha
string = "\n"
assert_equal 1, string.size

string = '\n'
assert_equal 2, string.size

# Interpolação
valor = 123
string = "valor: #{valor}"
assert_equal 'valor: 123', string
"m3-e1.rb" 64L, 1374C                                                                                                                                                                     49,15         16%

