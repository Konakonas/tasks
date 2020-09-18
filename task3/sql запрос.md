SELECT 
price.id_price,
price.id_good,
price.price,
good.id_good,
good.good_name,
FROM price, good
WHERE price.id_good = good.id_good
ORDER BY good.good_name;