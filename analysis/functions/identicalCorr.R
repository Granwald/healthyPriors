identicalCorr <- function(x, y){
  
  #tmpVariance <- matrix(NA, nrow = length(x), ncol = 1) 
  tmpErr <- matrix(NA, nrow = length(x), ncol = 1)
  for (i in 1:length(x)) {
    #tmpVariance[i,]  <- (y[i]-mean(y))^2
    tmpErr[i,] <- (y[i]- x[i])^2
  }
  #variance <- (1/length(y))*sum(tmpVariance[,1])
  
  
  MSE <- (1/length(y))*sum(tmpErr[,1])
  
  return(1-(MSE/var(y)))
  }